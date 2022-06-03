import {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={15}
          style={{width: '715px', height: '413px'}}
          initialCenter={{ lat: 41.296222592599676, lng: 69.28080506922137 }}
        >
            <Marker position={{ lat: 41.296222592599676, lng: 69.28080506922137 }}
            />
        </Map>
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBDQu_a4oms-OfoxqBCcGiv4UGtbHHnTvw'
})(MapContainer);