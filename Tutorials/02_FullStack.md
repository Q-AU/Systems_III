# Full Stack

## Stablishing the communications Server-Client
So far  in these set of tutorials we have: i) building a server using **Express.js**, ii) establishing a connections with the db using **mysql** and iii) building the client using **React.js**.

Finally is time to connect, to do that we will:

- Install [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) as node depency.
- Consume the API we created during Back-end tutorial
- Create a proxy so we dont have to change the endpoints while building the final version of our client
- Create the logic in the client side to handle the responses from the server
- Define a way to keep an user logged

### CORS
1. Install CORS dependency. If we don't do this step we wont be able to retreive data from the server in the client server

```console
npm install cors
```

2. Import the new dependency into *index.js* in the server side
```javascript
const cors=require("cors")
```
3. Define some parameters that we need to let the server that it can respond to an specific address
```javascript
//Some configurations
app.use(express.urlencoded({extended : true}));
app.use(cors({
  origin:["http://88.200.63.148:3000"],
  methods:["GET", "POST"],
  credentials:true
}))
``` 

### Consuming the API

1. In client-side project install [axios](https://github.com/axios/axios) 

```console
npm install axios
```

2. In **NoviceView** create the state object and create an empty array to hold the server response

```javascript
constructor(props)
{
    super(props);
    this.state={
        Novice:[]
    }
}
```
3. Make a call to the server to get the data
```javascript
componentDidMount()
{
  axios.get('http://88.200.63.148:5000/novice')
  .then(response=>{
      console.log(response.data)
    this.setState({
      Novice:response.data
    })
  })
}
```
- *componentDidMount* is part of the life cycle of ***React.js*
- Notice that we are using axios and the *get* method to access the *'/novice'* endoint
- As we are working asynchronous requests we can use the method *.then*
- Once there is a response we access to the data object.
- We are using setState from **React.js** to put the data in the local state

4. In the *render* method create a variable data that stores what is contained in *Novice* from our local state.

```javascript
let data=this.state.data
```

5. Replace the old code from return with this:
```javascript
<div className="row row-cols-1 row-cols-md-3 g-4" style={{margin:"10px"}}>
    {data.length > 0 ?
        data.map((d)=>{
            return(
                <div className="col" key={d.id}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{d.title}</h5>
                        <p className="card-text">{d.slug}</p>
                    </div>
                    <button style={{margin:"10px"}}  className="btn btn-primary bt">Read more</button>
                </div>
                </div>
                )
            })
             :"Loading..."}
        </div>
```
- We are using ternary operator to make a conditional rendering
- If there is data the map the item using this tags

6. If you did everything ok, you should be able to see the news from our data base.

### Proxy

1. Go to the *package.json* from our *client-dev* app and insert the rule for the proxy 

```javascript
"proxy":"http://88.200.63.148:5000"
```
2. Now fix the **NoviceView** and change the axios enpoint for *'/novice'*
- From now on we won't need to specify the whole URL


### Client logic

I want to let you know that many things in this next section can be improve in many ways, but as we are triying ot learn we will follow the long path. So this section will be subdivided into:

- Single news
- Add news 
- Sign in
- Login
- Using cookies and express-session


#### Single news
So far we have the view all the news available on our db. Each of  them is send from the server with the corresponding id, so it will be easy to make a request to the server and get an specific novica. However remember that each component (NoviceView and SingleNovicaView) is child of our App.js component. So how can we share data between children? 

To address this question, let's make the following:

1. In **NoviceView** insert this function/method:
```javascript
QSetViewInParent=(obj)=>{
    this.props.QIDFromChild(obj)
}
```

- Pay attention to *this.props.QIFromChild(obj)*. It is injecting and object as a parameter.

2. In the *button* of this component add an onClick prop and call our previously decalred method
```javascript
onClick={()=>this.QSetViewInParent({page:"novica", id: d.id})} 
```
- Every time the user click on the button of the mapped novica, we pass as an object the view we want to render and also the id of the view

3. Go to **App.js** and ad  **Novica** key to our local state object and ssign the default value 1:
```javascript
this.state={
    this.state={
     CurrentPage:"home",
     Novica:1,
   }
}
```

4. In the QSetView Method also insert the key but passing the id.
```javascript
QSetView=(obj)=>
{
  this.setState({
    CurrentPage:obj.page,
    Novica:obj.id || 0
  })
}
```

5. Now add to ***SingleNovicaView* the following prop:

```javascript
<SingleNovicaView data={state.Novica}  QIDFromChild={this.QSetView}/>
```

- data prop is used to assing the current id that comes from a callback from **NoviceView**
- QIDFromChild porp is used as callback to set "novice" page

6. In **SingleNovica.js** import axios
```javascript
import axios from 'axios'
```

7. Add novica key to the local state of this component (default value empty object)
```javascript
constructor(props)
{
    super(props);
    this.state={
        novica:{}
    }
}
```

8. Use *componentDidMount* method to start the get request.
```javascript
componentDidMount()
{
axios.get("/novice/"+this.props.data)
.then(response =>{
    console.log(response.data)
    this.setState({
        novica:response.data
    })
})
}

```

9. Check that you have the callback to pass data to the parent:
```javascript
QSetViewInParent=(obj)=>
{
    this.props.QIDFromChild(obj)
}
```
10. Replace the content of render method for this
```javascript
let novica= this.state.novica
    return(
    <div className="card" style={{margin:"10px"}}>
       {novica.length>0 ?
        <div>
            <h5 className="card-header">{novica[0].title}</h5>
            <div className="card-body">
            <h5 className="card-title">{novica[0].slug}</h5>
            <p className="card-text">{novica[0].text}</p>
            <button onClick={()=>this.QSetViewInParent({page:"novice"})}  className="btn btn-primary">Return news</button>
            </div>
        </div>
       :"Loading..."}
    </div>
    )
}
```

10. Well done!! We are able to retrieve one single new from our list of news. 


##TODO 

#### Add news
#### Sign in
#### Login
#### Using cookies and express-sessino




If you are reading this line, let me congratulate you. You have finifh our set of tutorial. Thank you for following me these weeks. 

See you around!!
