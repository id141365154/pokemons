import React from 'react';
import { connect } from 'react-redux';
import Card from './../Card/Card.js';
import Nav from './../Nav/Nav.js';
import Loadmore from './../LoadMore/LoadMore.js'
import { fetchCards } from './../../actions';



const Cards = (props) => {
	const pageSize = 9;
	let cardList = "Loading cards...";

	if (typeof props.cards.isFetched == 'undefined') {
		props.dispatch(fetchCards({
			code: props.match.params.code,
			page: 1,
			pageSize: pageSize
		}));
	} else if (!props.cards.isFetched) {
		props.dispatch(fetchCards({
			code: props.match.params.code,
			page: 1,
			pageSize: pageSize
		}));
	}

	if (typeof props.cards.posts !== 'undefined') {
		if (props.cards.posts.length > 0) {
			cardList = props.cards.posts.map((val, key, arr) => {
				return (
					<Card 
						key={key} 
						data={val}
					/>
				)
			});
		}
	}

	return (
		<div className="App">
			<Nav />
			<div className="sets-block">
				{cardList}
			</div>
			<Loadmore 
				isShowMore={props.cards.showMore} 
				clickHandler={()=>{
					props.dispatch(
						fetchCards({
							code: props.match.params.code,
							pageSize:props.cards.pageSize,
							page:props.cards.page+1
						})
					);
				}}
			/>
		</div>
	);
}

const mapStateToProps = function(state) {
	return {
		cards: state.cards
	}
}

export default connect(mapStateToProps)(Cards);