const printLog = (...args) => {
    console.log(new Date().toLocaleString(), '- App - ', ...args)
}

module.exports = {
    printLog
}

printLog('Executing index file complete...');