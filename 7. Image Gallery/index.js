import React from 'react';
import ReactDOM from 'react-dom';
class Gallery extends React.Component{
    constructor(){
        super();
        this.state={
            Selected:null,
            images:[
                '/images/html.jpeg',
                '/images/css.jpeg',
                '/images/js.jpeg',
                '/images/react.jpeg',
                '/images/bootstrap.jpeg',
                '/images/node.jpeg'
            ],
        };
    }
    handleImageClick=(index)=>{
        this.setState({Selected:this.state.images[index]});
    }
    render(){
        return(
            <div style={{padding:'20px'}}>
                <h1>Image Gallery of Web Development</h1>
                {
                    this.state.Selected &&(
                        <div style={{marginBottom:'20px'}}>
                            <img src={this.state.Selected}
                                 alt="Selected"
                                 style={{width:'600px', height:'400px', objectFit:'cover'}}/>
                        </div>
                    )
                }
                <div style={{display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:'10px'}}>
                    {
                        this.state.images.map((images,index)=>(
                            <img key={index} src={images} alt={'images ${index+1}'}
                                    style={{width:'100%', height:'auto', cursor:'pointer'}}
                                    onClick={()=> this.handleImageClick(index)}
                            />
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Gallery/>,document.getElementById('root'));