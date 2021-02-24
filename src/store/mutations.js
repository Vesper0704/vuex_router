
import {ADDINFO} from './mutation-types'
import Vue from "vue";

export const mutations={
    updateModName(state,newName){
        state.mod3.name=newName
    },

    [ADDINFO](state,addr){
        /*
        增加state里面不存在的数据并响应式改变
         */
        Vue.set(state.movie,'address',addr)
    },
    increment(state){
        state.counter++
    },
    decrement(state){
        state.counter--
    },
    addCount(state,count){
        console.log(count)
        console.log(count.type)
        console.log(count.count);
        state.counter+=count.count
    },
    addStu(state,newStu){
        state.students.push(newStu)
    },
    updateName(state,name){
        state.movie.name=name
    },
    asyncUpdate(state,msg){
        console.log('receive signal from actions');
        state.asyncData=msg  //异步数据操作
    }
}


