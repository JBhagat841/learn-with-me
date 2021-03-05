import React from "react";
import { connect } from 'react-redux'
import USAMap from "react-usa-map";
import { getGeneral } from "../redux/actions/GeneralActions";
import GeneralCards from './GeneralCards.js'

class GeneralMap extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
           generals: [],
           chosenOption: [],
           chosenTitle: []
        }
        this.showGeneralCard = (e, chosen, title) => {
            this.setState({
                chosenTitle: title,
                chosenOption: chosen,
                showGeneralCard: !this.state.showGeneralCard
            })
        }
    }

	componentDidMount(prevProps){
        if (this.props !== prevProps) {
            this.props.getGeneral()
            
        }
    }

	mapHandler = (e) => {
        let title = (e.target.textContent);
        let thisone = e.target.dataset.name;
        let chosen = this.props.general.general.data.filter(option => {
            return option.abbr === thisone
        });
		this.showGeneralCard(e, chosen, title);
	};

	statesCustomConfig = () => {
		return {
            AL: {
                fill: '#83B9A0'
            },
            AK: {
                fill: '#B7B983'
            },
            AZ: {
                fill: '#83B9A0'
            },
            AR: {
                fill: '#B983AE'
            },
            CA: {
                fill: '#B983AE'
            },
            CO: {
                fill: '#B9A083'
            },
            CT: {
                fill: '#8583B9'
            },
            DE: {
                fill: '#B983AE'
            },
            FL: {
                fill: '#B7B983'
            },
            GA: {
                fill: '#B9838A'
            },
            HI: {
                fill: '#B9838A'
            },
            ID: {
                fill: '#B9838A'
            },
            IL: {
                fill: '#83B9A0'
            },
            IN: {
                fill: '#839CB9'
            },
            IA: {
                fill: '#B9838A'
            },
            KS: {
                fill: '#B9838A'
            },
            KY: {
                fill: '#8583B9'
            },
            LA: {
                fill: '#8583B9'
            },
            ME: {
                fill: '#B7B983'
            },
            MD: {
                fill: '#B9A083'
            },
            MA: {
                fill: '#83B9A0'
            },
            MI: {
                fill: '#83B9A0'
            },
            MN: {
                fill: '#839CB9'
            },
            MS: {
                fill: '#839CB9'
            },
            MO: {
                fill: '#B7B983'
            },
            MT: {
                fill: '#83B9A0'
            },
            NE: {
                fill: '#B983AE'
            },
            NV: {
                fill: '#8583B9'
            },
            NH: {
                fill: '#839CB9'
            },
			NJ: {
				fill: "#B983AE"
			},
            NM: {
                fill: '#B983AE'
            },
			NY: {
				fill: "#B9838A"
			},
            NC: {
                fill: '#839CB9'
            },
            ND: {
                fill: '#B9A083'
            },
            OH: {
                fill: '#B983AE'
            },
            OK: {
                fill: '#83B9A0'
            },
            OR: {
                fill: '#B9A083'
            },
            PA: {
                fill: '#83B9A0'
            },
            RI: {
                fill: '#839CB9'
            },
            SC: {
                fill: '#8583B9'
            },
            SD: {
                fill: '#8583B9'
            },
            TN: {
                fill: '#B9A083'
            },
            TX: {
                fill: '#839CBA'
            },
            UT: {
                fill: '#839CBA'
            },
            VT: {
                fill: '#B9A083'
            },
            VA: {
                fill: '#83B9A0'
            },
            WA: {
                fill: '#839CB9'
            },
            WV: {
                fill: '#B7B983'
            },
            WI: {
                fill: '#B983AE'
            },
            WY: {
                fill: '#B7B983'
            },
            DC: {
                fill: '#B9A083'
            },
		
		};
	};
	render() {
		return (
			<div className="Map">
				<USAMap
					customize={this.statesCustomConfig()}
					onClick={this.mapHandler}
				/>
                <GeneralCards show={this.state.showGeneralCard} onClose={this.showGeneralCard} chosenOption={this.state.chosenOption} chosenTitle={this.state.chosenTitle} />
			</div>
		);
	}
}
const mSTP = state => {
    return {
        general: state.general
    }
}

const mDTP = dispatch => {
    return {
        getGeneral: info => dispatch(getGeneral(info))
    }
}

export default connect(mSTP, mDTP)(GeneralMap)