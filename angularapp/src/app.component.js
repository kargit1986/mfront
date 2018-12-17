export class AppComponent {
    static component = {
        template: `
            <div>
                <h3>Title: {{ $ctrl.config.title }} {{$ctrl.config.body}}</h3>
                <p>Greeting: {{ $ctrl.hello }}</p>
                <h1> finishing </h1>
            </div>
        `,
        controller: AppComponent,
    };

    static $inject = ['$http', 'config'];

    hello = 'Angular Web Component';

    constructor($http, config) {
        this.$http = $http;
        this.config = config;
    }
}
