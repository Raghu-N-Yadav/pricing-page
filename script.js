const data = async () => {

    const myData = await fetch('./data.json');
    const val = await myData.json()

    // console.log(val[0].monthBasic);
    return val[0]
}

const $checkBox = document.querySelector('#toggel')
const $priceValue = document.querySelector('#priceValue')
const $priceValue1 = document.querySelector('#priceValue1')
const $priceValue2 = document.querySelector('#priceValue2')
// const $slider = document.querSelectyor('.round')


if ($checkBox.checked) {
    $checkBox.checked = false
}
$checkBox.onclick = async () => {
    // alert('hi')
    // alert(data)
    const priceData = await data()
    // console.log(priceData)
    if ($checkBox.checked) {
        // alert('hi')
        $priceValue.innerHTML = `${priceData.annuBasic}`
        $priceValue1.innerHTML = `${priceData.annuPro}`
        $priceValue2.innerHTML = `${priceData.annuMaster}`

    }
    else {
        $priceValue.innerHTML = `${priceData.monthBasic}`
        $priceValue1.innerHTML = `${priceData.monthPro}`
        $priceValue2.innerHTML = `${priceData.monthMaster}`
    }
}
