const {dollarToYen,euroToDollar,yenToPounds} = require('./apps')


test('Euro to Yen', () => {

    let conversion = dollarToYen(100)

    expect(conversion).toBeCloseTo(14626.1682,2)
    //expect(typeof total).toBe("number")
})

test('Euro to Dollar', () =>{
    let conversion = euroToDollar(98)
    expect(conversion).toBe(104.86)
    //expect(typeof total).toBe('number')
})

test('Euro to Pounds', () =>{
    let conversion = yenToPounds(49)
    expect(conversion).toBeCloseTo(8665.4049,2)
    //expect(typeof total).toBe('number')
})