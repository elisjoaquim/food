import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Ft6jvmGvl2eYN68YAF3dGAATgqALErYUFUziiI3FqoKtvRriKqCNj-O5IxHHvSl9Ol9FRt9PIR5E7PEBz3iRuwi-fWw2P2VV05WpOLJ_sO76qkKV-CubY3LXljv4YHYx',
  },
});
