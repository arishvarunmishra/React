const logger=store=>next=>action=>{
    console.log("MW",action);
    next(action);
}

export default logger;