import React from 'react'
import { Link } from 'react-router-dom';
const Sdkc: React.FC<{}> = () =>{
  return (
    <>
      <section className='container'>
                <div className='unbounce-section'>
                    <div className='unbounce-left'>
                        <div className="accordian-tab">
                            <button className="accordion">Getting Started<i className="fa fa-plus"></i></button>
                            <div className="panel">
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div className="accordian-tab">
                            <button className="accordion">Customize the Editor<i className="fa fa-plus"></i></button>
                            <div className="panel">
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div className="accordian-tab">
                            <button className="accordion">Migration Guides</button>
                            <div className="panel">
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div className="accordian-tab">
                            <button className="accordion">Examples</button>
                        </div>
                        <div className="accordian-tab">
                            <button className="accordion">Plugins</button>
                        </div>
                        <div className="accordian-tab">
                            <button className="accordion">APIs</button>
                            <div className="panel">
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='unbounce-right left-space'>
                        <h1 className='closeio-heading'>Froala WYSIWYG Editor SDKs</h1>
                        <p className='closeio-des'>Froala Javascript WYSIWYG Editor has server side SDKs for multiple languages to help ease the editor's integration with your server.</p>
                        <div className="img-box grid-images">
                            <div className="img-align row-images">
                            <img src={require('../images/dotnet.png')} width="40" height="40" />
                                <p className="img-title">.Net</p>
                            </div>
                            <div className="img-align row-images">
                            <img src={require('../images/java.png')} width="40" height="40" />
                                <p className="img-title">Java</p>
                            </div>
                            <div className="img-align row-images">
                            <img src={require('../images/nodejs.png')} width="40" height="40" />
                                <p className="img-title">Node.Js</p>
                            </div>
                            <div className="img-align row-images">
                            <img src={require('../images/php.png')} width="40" height="40" />
                                <p className="img-title">PHP</p>
                            </div>
                            <div className="img-align row-images">
                            <img src={require('../images/python.png')} width="40" height="40" />
                                <p className="img-title">Python</p>
                            </div>
                            <div className="img-align row-images">
                            <img src={require('../images/rails-2.png')} width="40" height="40" />
                                <p className="img-title">Rails</p>
                            </div>
                        </div>
                        <div id="sdks-about" className="docs-group anchor">
                            <h2 className="title-left-border text-small">About</h2>
                            <p className="text-large">Each server SDK library contains information about how to install and configure it, how to handle different server side operations on images, files and how to use the image manager.</p>
                        </div>
                        <div id="sdks-image" className="docs-group anchor">
                            <h2 className="title-left-border text-small">Image</h2>
                            <p className="text-large">The Froala rich text editor SDKs offers detailed explanations, accompanied by code example for the following actions on images:</p>
                            <ul>
                                <li>Server Upload</li>
                                <li>Server Delete</li>
                                <li>S3 Upload</li>
                                <li>Resize</li>
                                <li>Validation</li>
                            </ul>
                        </div>
                        <div id="sdks-image-manager" className="docs-group anchor">
                            <h2 className="title-left-border text-small">Image Manager</h2>
                            
                            <p className="text-large">When using the Froala WYSIWYG Editor Image Manager, your server will need to receive and handle:</p>
                            
                            <ul>
                                <li>the load images request</li>
                                <li>the delete image from Image Manager request</li>
                            </ul>
                        </div>
                        <div id="sdks-file" className="docs-group anchor">
                            <h2 className="title-left-border text-small">File</h2>
                            
                            <p className="text-large">The Froala Editor SDKs also help you handle the following actions for files:</p>
                            
                            <ul>
                                <li>Server Upload</li>
                                <li>Server Delete</li>
                                <li>S3 Upload</li>
                                <li>Validation</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </section>
    </>
  )
}

export default Sdkc
