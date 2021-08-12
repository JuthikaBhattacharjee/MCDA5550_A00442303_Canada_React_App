function provincename(name){
    if(!name){
        return false
    }
    const regex=/Ontario|Quebec|Nova Scotia|New Brunswick|Manitoba|British Columbia|Prince Edward Island|Saskatewan|ALberta|Newfoundland and Labrador/
    if(regex.test(name)){
        return true
    }
    else
    {
        return false
    }
}
module.exports={
    provincename
}