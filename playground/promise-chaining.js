require('../src/db/mongoose')

const Task =require('../src/models/task')
// 5f14b6ea31e14443d4eae45f

// Task.findByIdAndDelete('5f15f060d9d29f424873f0dc').then((task) =>{
//     console.log(task)
//     return Task.countDocuments({complete:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })
const deleteTaskandcount = async(id)=>{
    const task=await Task.findByIdAndDelete(id) 
    const count = await  Task.countDocuments({complete:false})
    return count
}

deleteTaskandcount('5f14a5c71bdf5310cc42b27d').then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})