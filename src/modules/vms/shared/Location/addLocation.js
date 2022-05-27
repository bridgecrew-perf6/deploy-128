import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;
const LabelP = styled.p`
	font-family: "Inter";
	margin: 0;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: #1f1f1f;
	margin-top: 15px;

	@media (max-width: 1400px) {
		font-size: 15px;
	}

	@media (max-width: 768px) {
		font-size: 15px;
	}
`;

const InputSearch = styled.input`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		width: 100%;
		height: 35px;
		border: 1px solid rgba(31, 31, 31, 0.3);
		border-radius: 5px;
	}
`;

const Imag = styled.img`
	display: none;

	@media (max-width: 768px) {
		display: flex;
	}
`;

const AddContainer = styled.div`
    display:none;

    @media (max-width: 768px) {
		display: flex !important;
		justify-content:space-between;
        align-items:center;
        flex-direction:row;
        

	}

`;

const Para = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		width: 100%;
		max-width: 120px;
		height: 30px;

		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 15px;

		color: #1f1f1f;
	}
`;

const AddBtn = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 17px;
		color: #ff865a;
	}
`;

const AddLocation = () => {
	return (
		<MainContainer>
			<LabelP>AddLocation</LabelP>
			<InputSearch type="search" placeholder="121005" />
			<Imag src="icons/map-pin.png" alt="map-pin" width="25px" />

			<AddContainer>
				<Para>If this location is correct please add the pincode to the list.</Para>
				<AddBtn>+ Add Location</AddBtn>
			</AddContainer>
		</MainContainer>
	);
};

export default AddLocation;
