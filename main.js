const inspiration = ['Inspirational 1','Inspirational 2', 'Inspirational 3', 'Inspirational 4', 'Inspirational 5']

const messageGenerator = () => {
    let quoteGen = Math.floor(Math.random() * 5)
    return inspiration[quoteGen];
}

console.log(messageGenerator());