import { FaArrowRight } from "react-icons/fa6";


const PricingCardsContainer = () => (
  <div className='pricing_card_container'>
    <div className='pricing_card'>
      <div className='pricing_card_most_popular'>Plans</div>
      <div className='pricing_card_title_main'>
        <div className='pricing_card_title'>
          <h2>Custom</h2>
          <p>for medium-sized businesses</p>
        </div>
        <ul className='prticing_card_support'>
          <li>
            <strong>1</strong> Admin
          </li>
          <li>
            <strong>Unlimited </strong> IT Support
          </li>
          <li>
            <strong>Unlimited</strong> Team Lead
          </li>
          <li>
        \    <strong>Unlimited</strong> Supervisor
          </li>
          <li>
            <strong>24/7</strong> Support
          </li>
        </ul>
      </div>
      <button className='start_deploying_pro'>
        SELECT
        <FaArrowRight />
      </button>
    </div>
  </div>
);

export default PricingCardsContainer;
