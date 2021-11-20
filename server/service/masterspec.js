let dashboardserviceClass = class BaseService {

    constructor() {
        this.data = []
    };

    createRecord() {
       this.data = [ 
            {'title': 'NET Project', 'desc': 'This project will be used for API creation', status: 'active', liked: '5', imgSrc:"https://picsum.photos/id/237/200/300"},
            {'title': 'Java Project', 'desc': 'This project will be used for API creation', status: 'not started', liked: '20', imgSrc:"https://picsum.photos/id/238/200/300"},
            {'title': 'Python ', 'desc': 'This project will be used for API creation', status: 'completed', liked: '10', imgSrc:"https://picsum.photos/id/239/200/300"},
            {'title': 'HTML Project', 'desc': 'This project will be used for API static UI', status: 'active', liked: '1', imgSrc:"https://picsum.photos/id/240/200/300"},
            {'title': 'Angular Project', 'desc': 'This project will be used for SPA', status: 'active', liked: '26', imgSrc:"https://picsum.photos/id/227/200/300"},
            {'title': 'React Project', 'desc': 'This project will be used for SPA', status: 'active', liked: '3', imgSrc:"https://picsum.photos/id/217/200/300"},
            {'title': 'Graphql Project', 'desc': 'This project will be used for API creation', status: 'active', liked: '4', imgSrc:"https://picsum.photos/id/241/200/300"},
        ];
        
    }
    getFilteredData(searchName) {
        console.log(searchName)
        return this.data.filter(function (str) { return str.title.toLowerCase().includes(searchName.toLowerCase()); });
    }

    getData() {
        return this.data
    }

    createNewRecord(item) {
        this.data.push({
            title: item.title,
            desc: item.desc,
            imgSrc : `https://picsum.photos/id/${Math.floor((Math.random() * 200) + 1)}/200/300`,
            liked : 0,
            status : item.status
        })
        console.log(this.data);
    }
}
let dashboardservice = new dashboardserviceClass()
module.exports = dashboardservice