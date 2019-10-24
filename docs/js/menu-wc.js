'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@mathrix-education/education-api-sdk-workspace documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/EducationAPISDKModule.html" data-type="entity-link">EducationAPISDKModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ChaptersEndpoint.html" data-type="entity-link">ChaptersEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentAdapter.html" data-type="entity-link">CommentAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefaultAdapter.html" data-type="entity-link">DefaultAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/EducationAPISDKConfig.html" data-type="entity-link">EducationAPISDKConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/Endpoint.html" data-type="entity-link">Endpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModulesEndpoint.html" data-type="entity-link">ModulesEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotionsEndpoint.html" data-type="entity-link">NotionsEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlansEndpoint.html" data-type="entity-link">PlansEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostsEndpoint.html" data-type="entity-link">PostsEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsEndpoint.html" data-type="entity-link">ProductsEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReportsEndpoint.html" data-type="entity-link">ReportsEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchEndpoint.html" data-type="entity-link">SearchEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubscriptionsEndpoint.html" data-type="entity-link">SubscriptionsEndpoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/VotesEndpoint.html" data-type="entity-link">VotesEndpoint</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivitiesEndpoint.html" data-type="entity-link">ActivitiesEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthEndpoint.html" data-type="entity-link">AuthEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentsEndpoint.html" data-type="entity-link">CommentsEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountriesEndpoint.html" data-type="entity-link">CountriesEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DisciplinesEndpoint.html" data-type="entity-link">DisciplinesEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesEndpoint.html" data-type="entity-link">FilesEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GradesEndpoint.html" data-type="entity-link">GradesEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersEndpoint.html" data-type="entity-link">UsersEndpoint</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Activity.html" data-type="entity-link">Activity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Adapter.html" data-type="entity-link">Adapter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdapterConfig.html" data-type="entity-link">AdapterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Card.html" data-type="entity-link">Card</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link">Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chapter.html" data-type="entity-link">Chapter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link">Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Country.html" data-type="entity-link">Country</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateUser.html" data-type="entity-link">CreateUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataResponse.html" data-type="entity-link">DataResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Directory.html" data-type="entity-link">Directory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Discipline.html" data-type="entity-link">Discipline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorResponse.html" data-type="entity-link">ErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/File.html" data-type="entity-link">File</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Grade.html" data-type="entity-link">Grade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageResponse.html" data-type="entity-link">MessageResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Model.html" data-type="entity-link">Model</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Module.html" data-type="entity-link">Module</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notion.html" data-type="entity-link">Notion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedResponse.html" data-type="entity-link">PaginatedResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Plan.html" data-type="entity-link">Plan</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Purchase.html" data-type="entity-link">Purchase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Report.html" data-type="entity-link">Report</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link">Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Search.html" data-type="entity-link">Search</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrictCreateOptions.html" data-type="entity-link">StrictCreateOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrictDeleteOptions.html" data-type="entity-link">StrictDeleteOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrictListOptions.html" data-type="entity-link">StrictListOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrictReadOptions.html" data-type="entity-link">StrictReadOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrictRelationListOptions.html" data-type="entity-link">StrictRelationListOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrictRelationReadOptions.html" data-type="entity-link">StrictRelationReadOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrictRelationReorderOptions.html" data-type="entity-link">StrictRelationReorderOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrictUpdateOptions.html" data-type="entity-link">StrictUpdateOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subscription.html" data-type="entity-link">Subscription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vote.html" data-type="entity-link">Vote</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});