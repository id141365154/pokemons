import React from 'react';
import { connect } from 'react-redux';
import Card from './../../components/Card/Card.js';
import Nav from './../../components/Nav/Nav.js';
import Loadmore from './../../components/LoadMore/LoadMore.js';
import Spinner from './../../components/Spinner/Spinner.js';
import Filter from './../../components/Filter/Filter.js';
import Msg from './../../components/Msg/Msg.js';
import { fetchCards, fetchCardTypes, cardsFilterSwitch } from './../../actions';

class Cards extends React.Component {

	constructor(props) {
		super();
	}

	componentDidMount() {
		this.props.dispatch(fetchCardTypes());
	}

	render() {
		const pageSize = 9;

		let cardList = <Msg message="Loading cards..." />

		let loadMore = '';


		if (typeof this.props.cards.isFetched === 'undefined') {
			this.props.dispatch(fetchCards({
				code: this.props.match.params.code,
				page: 1,
				pageSize: pageSize
			}));
		} else if (!this.props.cards.isFetched) {
			this.props.dispatch(fetchCards({
				code: this.props.match.params.code,
				page: 1,
				pageSize: pageSize
			}));
		}

		if (typeof this.props.cards.posts !== 'undefined') {
			if (this.props.cards.posts.length > 0) {
				cardList = this.props.cards.posts.map((val, key, arr) => {
					return (
						<Card 
						key={key} 
						data={val}
					/>
					)
				});

				if (this.props.cards.posts.length >= this.props.cards.pageSize) {

					loadMore = <Loadmore 
							isShowMore={this.props.cards.showMore} 
							clickHandler={()=>{
								this.props.dispatch(
									fetchCards({
										code: this.props.match.params.code,
										pageSize:this.props.cards.pageSize,
										page:this.props.cards.page+1,
										types:this.props.cards.filter.active,
									})
								);
							}}
						/>
				}

			} else {
				cardList = <Msg message="Nothing found" />;
			}
		}


		return (
			<div className="App">
				<Nav />
				<div className="sets-block">
					{cardList}
				</div>

				<Spinner isVisible={this.props.cards.isFetching} />

				{loadMore}

				{ typeof this.props.cards.filter !=='undefined' &&
					<Filter list={this.props.cards.filter.list} active={this.props.cards.filter.active} 
						onClick={(val)=>{
							this.props.dispatch(cardsFilterSwitch(val));

							let params =  {
										types:this.props.cards.filter.active,
										code:this.props.match.params.code,
										pageSize:this.props.cards.pageSize,
										page:1
									};

							this.props.dispatch(fetchCards(params));
						}
				} />
				}
			</div>
		);
	}
}


const mapStateToProps = function(state) {
	return {
		cards: state.cards
	}
}

export default connect(mapStateToProps)(Cards);