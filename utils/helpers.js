module.exports = {
    fullName: (who) =>{
        return who.firstName + ' ' + who.lastName
    },
    formatDate: date => new Date(date).toLocaleDateString()
}