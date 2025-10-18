// get data 
export const loadInstallApp = () => {
    try {
        const data = localStorage.getItem('installList')
        return data ? JSON.parse(data) : []
    }
    catch (err) {
        console.log(err);
        return []
    }
}


// save data 

export const updateList = (app) => {
    const installList = loadInstallApp();
    try {
        const isRepeat = installList.some(p => p.id === app.id);
        const updateInstallList = [...installList, app]
        if (isRepeat) {
            return alert('this apk already install');
        }
        localStorage.setItem('installList', JSON.stringify(updateInstallList))
    }
    catch (err) {
        console.log(err)
    }

}

// delete  data 

export const handleRemoveUnInstall = (id) => {
    const unInstallList = loadInstallApp();
    try {
        const updateInstallList = unInstallList.filter(p => p.id !== id);
        console.log(unInstallList)
        localStorage.setItem('installList', JSON.stringify(updateInstallList))
    }
    catch (err) {
        console.log(err)
    }
}