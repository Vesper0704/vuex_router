/*
getters类似于组件里面的计算属性
 */
const getters={
    getSquare(state){
        return state.counter*state.counter
    },
    getOldStu(state){
        return state.students.filter(s=>s.age>22)
    },
    getStuLen(state,getters){
        return getters.getOldStu.length
    },
    getStuOlder(state){
        return function(age){
            return state.students.filter(s=>s.age>age).length
        }
    }
}

module.exports=getters
