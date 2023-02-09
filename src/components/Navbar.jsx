import React from 'react';

const Navbar = () => {

    const sections =["item1","item2","item3","item4","item5","item6"]
    return (
        <section className='navbar'>
            {
                sections.map((e,i)=>{
                    return (
                        <h3 key={i}>{e}</h3>
                    )
                })
            }
        </section>
    );
}

export default Navbar;
