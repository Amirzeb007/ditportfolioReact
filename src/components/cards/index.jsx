import React from 'react';

function Col2Cards(props) {
    const { cards } = props;
    return (
        <>
            {
                cards.map((item, i) => {
                    return (
                        <div key={i} className="box">
                            {item.img &&
                                <div className="img_wrapper">
                                    <img src={item.img} alt="" className="img-fluid" />
                                </div>
                            }
                            <div className="cap">
                                <h4>{item.hd}</h4>
                                <p>{item.para}</p>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

function Card3Col() {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus distinctio provident iusto commodi beatae similique numquam nostrum, quas minus possimus molestiae, earum labore eaque, odio enim saepe consequatur eius adipisci?
            </p>
        </>
    );
}

export {
    Col2Cards,
    Card3Col
};