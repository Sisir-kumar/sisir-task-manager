require('../src/db/mongoose')

const User=require('../src/models/user')

// User.findByIdAndUpdate('5f14b619beaf9d14f41e6652',{age:25}).then((user) =>{
//     console.log(user)
//     return User.countDocuments({age:24})
// }).then((result) =>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })

const findByIDAnddelete = async(id,name) =>{
    const user= await User.findByIdAndUpdate(id,{name})
    const count =await User.countDocuments({age:24})
    return count
}

findByIDAnddelete('5f14ae1e5082c146140e75cd','Hari').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})