import React,{ Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Mycard extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <Card >
            <div className="cardimg mt-1">
              <img src={this.props.image} className="rounded" style={{height:"150px"}} alt="profilepicture"/>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}教授
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                研究領域 : {this.props.text}
              </Typography>
            </CardContent>
        </Card>
      </div>      
    )
  }
}
export default Mycard;