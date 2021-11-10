const $app = document.getElementById('app');
$app.innerHTML = String.fromCodePoint(0x1F604, 0x1F3FD);

const main = async () => {
    const resp = await fetch('annotations.json');
    const data = await resp.json();
    const { annotations } = data.annotations;

    console.log(annotations);
}

main();