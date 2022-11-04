import symbolIncrease from '../../assets/+.png'
import symbolDecrease from '../../assets/-.png'

const dataCart = [
    {
        id: 0,
        shopName: "khanh1",
        cart:
        [
            {
                id: 0,
                image:"data:image/webp;base64,UklGRsADAABXRUJQVlA4ILQDAABwEQCdASo8AFAAPmkqj0WkIqEbOb4AQAaEswBiSkeDkH5edQG+iDbL87d6Hehp9W70AOlsn3bPnwF2ly/Hztvl9Zv/Q8wP1GoYsJap2Lhc43wNlFyZAhrRlF8iv1w+ahHHgV0GEIkU0+63ze2u2TK1yq8KeZRROJSaS8aY0Ij8urQGWUp6og46e+XghkuJ8/70ilEAAP78hrCiyAIvxF0XyGBx73TyVMtmk0dc9WVfPa+jU4vlFw7PJomDFITtXM7F/GBwa8XIH+H6u6Lww27AW2WQuLBA5lx1u75hz98IkGtIkJh85Gigg3zfP/NAeRrEBahAO8Jfw5y+RY/ovATT7O/d7xzXjykR6Pinq1sz/G6BtcKmd+ecF8YbwUGPqTbpo5Qo/y/T+n/HuKieqP+T5AWFjbqMuywwYbJbqm8SnoXH/2JVkzq62L+a1l0hLcOJXEOv8ggnsYSjtKj6gzNWA+RwwjGDpzuK0c9MitwIqUIKfECYtvhXVwYBB2Cylkno/E3upBw9kFw3oqmEeBX84hIpfYf1q/4LaUL0qUCIzQ/RcJVy5iu1hE6a1TYrIeNMgkFb8BHxx/RjRqprK2QOmnnlH/iHsKREmeEd1ZtWkNoQB1FlF503MkyiooHYLeBPxYESX/5jdcuzx1liiZ6e3K1mxgxx41RUYHYy91RYlH6LoGl/td42wUdZPOKHpPyiGt9vczsMMOCn9B/P3hau4Ibdoh1wtebjPv6/RwaJiSzUdxzynosQkyMuFLkp8tYmWLk3Y4GVssI9Tukq/tQp8mIRM+u+S1BjtVg28WmnbsW4PK+O2ako+T3i6/V32ozKfYqq/yd2F/7QXuABF+qMJtPL1fs5Ah9J4tc/tsiAoefyrgfEt9sVeyvPLDMT/a8sZMPqoBmfxKyxVWQ/RZH8oN6TczEwvlEqSB2BNq+aaptYpNQORkicVy6j1QTJUMn9cbFT9KOv/omxydNSo++uJMmURi005a00kVjrHuK9iF1YynB0gzr8b/mATy0N8Tv5jv2uBFtXWd9VUs3BZvPittxx9m23fylkJhB+J1BLtseFHSazcV0pJakJrstHSi7glV5F3TLgtbBz9EYE04onvlcixah+fv1A5Q0cw7Dej7uWUefw3oajgXbqmPxsB0YzC+6uIa4FfGtA0A6aRPDyz96EWes4P6Ahp9YGru4Un7csa3+lt12dcH+XD+hswImC8oxdg+AyKrW0HK2GTAEm+3z+uc7wsPQgIdfBZykpXsIwAAA=",
                title:"Fresh Strawberries",
                price: 36.00,
            },
            {
                id: 1,
                image:"data:image/webp;base64,UklGRgAEAABXRUJQVlA4IPQDAADQEQCdASo8AFAAPm0ukkYkIqGhKbVeQIANiWMAybx2C1K8+uIfhfhvYX2py/uB3bAci7GR/yPVC/2vNh9I+wR+sf/K4HdTkquYOvczsm8gIogwYDdBbaYF8/kfCzimbMQuj/yAgr7EO7OKlxCH1YmtRbt3YxRHUfOjrXm4bczkvcvIc5EDRjFzT+5d/GSia7/9eOcljuLAAP77EuqFb+W2AFW5/euNW/ltcQp6Bcm/jtOzUOWTU5bqunq5n0/tpK/3WCaqjW9JU3j9hJlMUlGO/LLvA1rPCT+M/1MeYRFm2oEYbd1GfC+FWh4m9cNYjfC2nG5J28D9R1eWBD0wFCABiSBeXIupWax9R7aPdhXxoXSJwUUp0AoXwrErFoc7qtU2wPLYYV+EAbXBhdi2Uq9t64zNU94l3JIuXxOtDuekNYt2IUNoCSeLR837+E616GHJHoe0yBVQOldp751yDP+2vOoMk3J333h/qjWktZBBYHHjH+dIFEIosfMcTRBbqe2LBbVPNsXn3v8c9B4hUFfjmD95GNYkoCa5xC4Cwg8rQqH5bHox+xaWfqua3vgMB10AI+AmYN28/Ob9PW0Oq00r6ImECSjO2mu/xX4Z/uRTrpdzB1aaTAx3hs3ek2dhtWEMPm2oEzJ0MS+OuNEfz4kL1SoEsV6gGgza1moR7TPOaqi7L/8mQdOl4Oqaiy/TZ344TBicI8jq8c75f7sw8/eU0FPm+93g5UbyBGDA0iHdbWklqUsNZKItFcMQUwfAb6FrIihz/SAjsALqWLjtw56Yekk2XTdu3wfXRljd6flcIk3zV68z7zylEVR2rY8CbKyI6eucCete0eXx31UnLMiLDasTeOa1tA+knlRDm7oYSNfzwtuCFeGu38B4WpZJo3ps3e1cE/O3IQv7Dc5MwY4m9kwSrunZUUlv20+84MvB/Lzh1ERGfKoL0oJDTft8s2FW/fDKSY+N2v3ueQHpvsOdaIZWayGZ/V8oLVdo5KX6vC/dafqjMgaIocxLOdKnHteZ6RhAZAqBipmQOv/cDnznEMxe4gNhk+MpZRdc/JKWds0h4RqPG36ZmsTaAAVHCgy8QWbgwgmoM4eG2qse1mW/sy452iHZ6H0OR/NP9LR+01KwA+q6lUlRQ9GTJb2OEmXwVaYwjuI5DrtVbEEw3RXimsoOc8X80XviSHYA77VEAMexAIsLlt22qTUxmwju/Km5pT2tuoSR5DNS35uMWfUWOoGu9InP8QXI0Nwi5Xn6TVPzYWs0NFvEb4sDvgOQ3MiKLbLvq5z9R+9rZuwj1wbpMXL9VIhrA3ofuYUr5RPjPT9OyprPHfXNuDjC4INzYJgOoAAA",
                title:"Lightweight Jacket",
                price: 16.00,
            }
        ]
    },
    {
        id: 1,
        shopName: "khanh2",
        cart:
        [
            {
                id: 0,
                image:"data:image/webp;base64,UklGRsADAABXRUJQVlA4ILQDAABwEQCdASo8AFAAPmkqj0WkIqEbOb4AQAaEswBiSkeDkH5edQG+iDbL87d6Hehp9W70AOlsn3bPnwF2ly/Hztvl9Zv/Q8wP1GoYsJap2Lhc43wNlFyZAhrRlF8iv1w+ahHHgV0GEIkU0+63ze2u2TK1yq8KeZRROJSaS8aY0Ij8urQGWUp6og46e+XghkuJ8/70ilEAAP78hrCiyAIvxF0XyGBx73TyVMtmk0dc9WVfPa+jU4vlFw7PJomDFITtXM7F/GBwa8XIH+H6u6Lww27AW2WQuLBA5lx1u75hz98IkGtIkJh85Gigg3zfP/NAeRrEBahAO8Jfw5y+RY/ovATT7O/d7xzXjykR6Pinq1sz/G6BtcKmd+ecF8YbwUGPqTbpo5Qo/y/T+n/HuKieqP+T5AWFjbqMuywwYbJbqm8SnoXH/2JVkzq62L+a1l0hLcOJXEOv8ggnsYSjtKj6gzNWA+RwwjGDpzuK0c9MitwIqUIKfECYtvhXVwYBB2Cylkno/E3upBw9kFw3oqmEeBX84hIpfYf1q/4LaUL0qUCIzQ/RcJVy5iu1hE6a1TYrIeNMgkFb8BHxx/RjRqprK2QOmnnlH/iHsKREmeEd1ZtWkNoQB1FlF503MkyiooHYLeBPxYESX/5jdcuzx1liiZ6e3K1mxgxx41RUYHYy91RYlH6LoGl/td42wUdZPOKHpPyiGt9vczsMMOCn9B/P3hau4Ibdoh1wtebjPv6/RwaJiSzUdxzynosQkyMuFLkp8tYmWLk3Y4GVssI9Tukq/tQp8mIRM+u+S1BjtVg28WmnbsW4PK+O2ako+T3i6/V32ozKfYqq/yd2F/7QXuABF+qMJtPL1fs5Ah9J4tc/tsiAoefyrgfEt9sVeyvPLDMT/a8sZMPqoBmfxKyxVWQ/RZH8oN6TczEwvlEqSB2BNq+aaptYpNQORkicVy6j1QTJUMn9cbFT9KOv/omxydNSo++uJMmURi005a00kVjrHuK9iF1YynB0gzr8b/mATy0N8Tv5jv2uBFtXWd9VUs3BZvPittxx9m23fylkJhB+J1BLtseFHSazcV0pJakJrstHSi7glV5F3TLgtbBz9EYE04onvlcixah+fv1A5Q0cw7Dej7uWUefw3oajgXbqmPxsB0YzC+6uIa4FfGtA0A6aRPDyz96EWes4P6Ahp9YGru4Un7csa3+lt12dcH+XD+hswImC8oxdg+AyKrW0HK2GTAEm+3z+uc7wsPQgIdfBZykpXsIwAAA=",
                title:"Fresh Strawberries",
                price: 36.00,
            },
        ]
    }
]

const ListCart = () => {
    return(<div className=" w-[65%]">   
                <div>
                {dataCart.map(data=>(
                    <div key={data.id} className="mb-8 shadow-lg">
                        <h1 className= "text-[#101075] text-3xl  mb-4 font-['Josefin_Sans']">ShopName: {data.shopName}</h1>
                        <div className="flex flex-row justify-between items-center h-[52px] px-[10%] font-['Poppins_Bold'] text-sm font-bold border" >
                            <h1>PRODUCT</h1>
                            <h1 className=" ml-[180px]">PRICE</h1>
                            <h1 className="ml-4">QUANTITY</h1>
                            <h1 className="mr-[-10px]">TOTAL</h1>
                        </div>
                        {data.cart.map(cart=>(
                            <div key = {cart.id} className="flex flex-row justify-between items-center h-[185px] px-[10%] border">
                            <img src={cart.image} alt="anh san pham" className="h-[60px] w-[80px] "></img>
                            <h1>{cart.title}</h1>
                            <price>{cart.price}$</price>
                        <div className="flex justify-start">
                            <button className="flex justify-center items-center w-[45px] h-[45px] border ">
                                <img src={symbolDecrease} alt="Dau -"></img>
                            </button>
                            <input className="w-[45px] h-[45px] bg-[#f7f7f7] flex justify-start items-center 
                                        text-xs text-center pointer-events-none" type="text" value="1" ></input>
                            <button className="flex justify-center items-center w-[45px] h-[45px]  border">
                                <img src={symbolIncrease} alt="Dau +"></img>
                            </button>
                        </div>
                        <h1>{data.price}$</h1>
                    </div>
                    
                    ))}
                    <div className='h-[100px] border flex justify-between items-center px-[10%] '>
                        <input type="text" className='w-[35%] h-[55px] min-w-[100px] border rounded-3xl text-center' placeholder='Coupon code'></input>
                        <button class="w-[25%] min-w-[100px] border h-[45px] rounded-3xl bg-[#e6e6e6] hover:bg-[#717fe0] hover:text-white">
                            APPLY COUPON
                        </button>
                        <button class="w-[25%] min-w-[100px] border h-[45px] rounded-3xl bg-[#e6e6e6] hover:bg-[#717fe0] hover:text-white">
                            UPDATE CART
                        </button>
                        </div>
                    </div>
                ))}    
            </div>
                
    </div>)
}

export default ListCart