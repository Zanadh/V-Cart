function counter(id, obj){
    let count = 0
    // console.log(obj);
    obj.forEach(element => {
        if(element.ProductId == id) count++
    });
    return count
}

module.exports = counter