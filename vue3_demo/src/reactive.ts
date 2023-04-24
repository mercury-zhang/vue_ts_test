export default reactive = <T extends object>(target:T)=>{
    return new Proxy(target,{
        get(target,key,receiver){
            let res = Reflect.get(target,key,receiver)
            return res
        },
        set(target,key,value,receiver){
            let res = Reflect.set(target,key,value,receiver)
            return res
        }
    }),
}