import React from 'react';
import { Link } from 'react-router-dom';

const Download: React.FC<{}> = () =>{
    return (
        <>
            <div className='section'>
                <h1 className='main-heading'>All-purpose, easy to use WYSIWYG editor with elegance</h1>
                <p className='main-des'>We make web editing easier, more powerful and more enjoyable with every single click.</p>
                <div className='button'>
                    <Link to='/' className='btn-explore'>
                        <a className='btn-inline-ex'>Start Free Trial</a>
                    </Link>
                    <Link to='/download' className='btn-download'>
                        <a className='btn-inline-down'>Check our Pricing</a>
                    </Link>
                </div>
                <p className='use-text'>Or simply use NPM <span className='box-color'> npm install froala-editor</span></p>
            </div>
            <section className='bg-color'>
              <div className='container'>
                  <p className='text-froala'>G2’s top WYSIWYG editor for over two years</p>
                  <div className='spring-images'>
                        <div className='img-Spring'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                        <div className='img-Spring'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                        <div className='img-Spring'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                        <div className='img-Spring'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                        <div className='img-Spring'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                  </div>
                  <p className='text-bold'>These companies are changing the world, and they use Froala.</p>
                  <div className='spring-images'>
                        <div className='comapnies-img'>
                            <img src={require('../images/samsung.png')} width="75" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/apple.png')} width="25" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/ibm.png')} width="62" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/amazon.png')} width="124" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/ebay.png')} width="62" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/intel.png')} width="38" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/netflix.png')} width="88" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/cisco.png')} width="44" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/thomson.png')} width="107" height="25"/>
                        </div>
                  </div>
                    <p className="text-read-more"><Link to='/customers'><a className='text-read-more'>Read more about our customers</a></Link></p>
              </div>
            </section>
        </>   
    
  );
}

export default Download;