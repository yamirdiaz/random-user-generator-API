const btnEl = document.getElementById("btn")


const handleClickBtn = async() => {
  try {
    const res = await fetch('https://randomuser.me/api/')
    if(!res.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await res.json()
    const dataUser = data.results[0]

    //To convert the time of the birthday
    const isoDate = dataUser.dob.date
    const date = new Date(isoDate)
  

    document.getElementById("name").textContent = `${dataUser.name.first} ${dataUser.name.last}`
    document.getElementById("email").textContent = dataUser.email
    document.getElementById("phone").textContent = dataUser.phone
    document.getElementById("location").textContent = `${dataUser.location.state}, ${dataUser.location.country}`
    document.getElementById("birthday").textContent = date.toLocaleDateString()
    document.getElementById("profile-img").src = dataUser.picture.large

  } catch(err) {
    console.error('Fetch failed', err)
  }
  
}

btnEl.addEventListener("click" , handleClickBtn)