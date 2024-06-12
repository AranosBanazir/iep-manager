const tabDiv = document.querySelector('#student-tabs')



const viewGoal = async (e) =>{
    if (e.target.localName !== 'button') return

    const goalId = e.target.dataset.goalId

     fetch(`/goal/${goalId}`)
    console.log(e)

}




tabDiv.addEventListener('click', viewGoal)