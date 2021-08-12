const {provincename}=require(provincename)

test('Checking the province name Nova Scotia', ()=> {
    expect(provincename('Nova Scotia')).toBe(true)
});

test('Checking the province name California', ()=> {
    expect(provincename('California')).toBe(false)
});

test('Checking the province name Ontario', ()=> {
    expect(provincename('Ontario')).toBe(true)
});
