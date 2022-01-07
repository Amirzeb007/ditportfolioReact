import React from 'react';

function Card2by2(props) {
    return (
        <section className='expertise_sec py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="small_hd">{props.hd}</h5>
                        <div className="flex_wrapper">
                            {props.cards.map((item, i) => {
                                return (
                                    <div key={i} className="box">
                                        <div className="img_wrapper">
                                            <img src={item.img} alt="" className="img-fluid" />
                                        </div>
                                        <div className="cap">
                                            <h4>{item.hd}</h4>
                                            <p>{item.para}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

function Card3Col() {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus distinctio provident iusto commodi beatae similique numquam nostrum, quas minus possimus molestiae, earum labore eaque, odio enim saepe consequatur eius adipisci?
            </p>
        </>);
}

export {
    Card2by2,
    Card3Col
};