global.constants = {
    s3Image: "http://homey-frontend.s3-website.us-east-2.amazonaws.com/img/",
    s3Resources: "https://homey-resources.s3.us-east-2.amazonaws.com/resources/"
};
global.priceFilter = value => value ? "$" + value.toFixed(2) : value;