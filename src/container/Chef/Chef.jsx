import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
	<div className='app__bg app__wrapper section__padding'>
		<div className='app__wrapper_img app__wrapper_img-reverse'>
			<img src={images.chef} alt='chef' />
		</div>

		<div className='app__wrapper_info'>
			<SubHeading title="About Chef" />
			<h1 className='headtext__cormorant'>What We Believe In</h1>

			<div className='app__chef-content'>
				<div className='app__chef-content_quote'>
					<img src={images.quote} alt='quote' />
					<p className='p__opensans'>QUOTE</p>
				</div>
				<p className='p__opensans'>QUOTE Cont.</p>
			</div>

			<div className='app__chef-sign'>
				<p>Chef Name</p>
				<p className='p__opensans'>Chef Title</p>
				<img src={images.sign} alt='sign' />
				<div />
			</div>
		</div>
	</div>
);

export default Chef;
