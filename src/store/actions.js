

/*
异步操作如果定义在mutations devtool无法跟踪变化
异步操作要写在actions
 */
export const actions={
    asyncUpdate(context,payload){
        setTimeout(()=>{
            context.commit('asyncUpdate',payload.message) //还是要提交给mutations
            payload.success()//回调函数
        },1000)
    }
}
