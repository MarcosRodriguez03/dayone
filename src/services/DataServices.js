const addingNumbers = async (num1, num2) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/AddNum/Adding/${num1}/${num2}`);
    const data = await promise.text();

    return data;
}

export { addingNumbers }