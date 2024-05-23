import { useState } from "react";
import "../../css/Support.css";
import { Accordion, Card } from "react-bootstrap";

const Support = () => {
  const [activeKey, setActiveKey] = useState<any>(null);

  const handleAccordionClick = (eventKey: any) => {
    if (activeKey === eventKey) {
      setActiveKey(null);
    } else {
      setActiveKey(eventKey);
    }
  };
  return (
    <div className='support-page'>
      <div className='support-page-top'>
        <div className="support-page_center">
          <h1>Frequenty Asked Questions</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            explicabo fugiat aperiam non iste deleniti asperiores harum modi
            perferendis! Veniam molestias quo temporibus consectetur qui.
          </p>
        </div>
      </div>

      <div className='support-page-accordion_container'>
        <div className='half-background'>
          <Accordion activeKey={activeKey} onSelect={handleAccordionClick} as={Card.Header} >
            <div>
              <Accordion.Item eventKey='0'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt, magni?
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Aut quaerat animi exercitationem ab maiores, quasi labore!
                        A nam magni quam cupiditate laboriosam sint explicabo unde
                        animi asperiores facere optio officiis ratione est
                        nesciunt sapiente expedita, nemo aperiam? Quisquam,
                        voluptas! Veniam laboriosam dolorem libero officia fugit
                        voluptatibus qui, natus quos! At ullam deserunt explicabo,
                        amet vel quam cumque maiores. Voluptatibus odio saepe
                        sapiente voluptates dolor at necessitatibus velit totam
                        nostrum aliquam, minus quod repellendus vel dolore maiores
                        temporibus error ipsa porro magni provident labore quae,
                        beatae veritatis! Ab eos consequuntur aperiam quidem
                        pariatur iure reprehenderit tempora labore quo nam
                        suscipit recusandae architecto minus porro, repellat quis
                        excepturi quod et iusto? Autem suscipit voluptatibus
                        delectus est vel reprehenderit voluptatum doloremque sunt
                        sapiente!
                      </p>
                    </div>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt, magni?
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quidem praesentium ipsam nemo quaerat itaque vitae? Magni
                        officiis saepe, possimus enim minus labore magnam sequi id
                        voluptate natus eligendi culpa suscipit. Repellendus
                        fugiat, dolorem, consequuntur quasi amet obcaecati
                        distinctio non, eligendi ut consectetur nemo eveniet
                        molestias! Voluptatum perspiciatis tempore, ducimus iure
                        numquam, consequuntur minus similique dignissimos autem
                        delectus laborum saepe dolorum quia labore qui soluta
                        ratione necessitatibus a sint illo eos. Sunt, ipsam quas
                        dolores dolor ea obcaecati tempore possimus accusamus sed
                        officia iste blanditiis perspiciatis, quasi ratione velit
                        adipisci nulla eligendi facilis rerum enim corporis
                        aspernatur. Porro aut dolorum modi perspiciatis aliquid
                        quas voluptas rerum veniam repellat molestias. Incidunt,
                        exercitationem ipsum. Temporibus quidem corrupti mollitia
                        dolores? Hic in reiciendis quaerat.
                      </p>
                    </div>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt, magni?
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat minima itaque quo harum reiciendis rem unde eaque
                        commodi iure consectetur. Id, quidem laudantium a velit
                        dicta asperiores repellendus officia enim labore eos ut
                        tempore praesentium quia deleniti dolores debitis quis quo
                        ullam quam eum. Adipisci dignissimos alias aspernatur fuga
                        amet dolore, magnam distinctio repellendus sunt dolores
                        beatae iste ad animi dicta aut. Vero vitae natus est
                        porro, nemo officia vel quidem non beatae laboriosam nulla
                        nisi! Et deserunt id atque tenetur. Maiores perspiciatis
                        neque saepe nobis nihil mollitia provident aperiam,
                        deleniti tempore ad possimus dolores? Ratione, omnis
                        maiores! Facere eaque vero qui. Ipsam laboriosam,
                        molestiae aliquid, obcaecati tenetur odit delectus ducimus
                        exercitationem aspernatur architecto cupiditate corrupti
                        ratione optio voluptatem et.
                      </p>
                    </div>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='3'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt, magni?
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat minima itaque quo harum reiciendis rem unde eaque
                        commodi iure consectetur. Id, quidem laudantium a velit
                        dicta asperiores repellendus officia enim labore eos ut
                        tempore praesentium quia deleniti dolores debitis quis quo
                        ullam quam eum. Adipisci dignissimos alias aspernatur fuga
                        amet dolore, magnam distinctio repellendus sunt dolores
                        beatae iste ad animi dicta aut. Vero vitae natus est
                        porro, nemo officia vel quidem non beatae laboriosam nulla
                        nisi! Et deserunt id atque tenetur. Maiores perspiciatis
                        neque saepe nobis nihil mollitia provident aperiam,
                        deleniti tempore ad possimus dolores? Ratione, omnis
                        maiores! Facere eaque vero qui. Ipsam laboriosam,
                        molestiae aliquid, obcaecati tenetur odit delectus ducimus
                        exercitationem aspernatur architecto cupiditate corrupti
                        ratione optio voluptatem et.
                      </p>
                    </div>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
              <Accordion.Item eventKey='4'>
                <div id='accordion-body-form'>
                  <Accordion.Header>
                    <h4>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt, magni?
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat minima itaque quo harum reiciendis rem unde eaque
                        commodi iure consectetur. Id, quidem laudantium a velit
                        dicta asperiores repellendus officia enim labore eos ut
                        tempore praesentium quia deleniti dolores debitis quis quo
                        ullam quam eum. Adipisci dignissimos alias aspernatur fuga
                        amet dolore, magnam distinctio repellendus sunt dolores
                        beatae iste ad animi dicta aut. Vero vitae natus est
                        porro, nemo officia vel quidem non beatae laboriosam nulla
                        nisi! Et deserunt id atque tenetur. Maiores perspiciatis
                        neque saepe nobis nihil mollitia provident aperiam,
                        deleniti tempore ad possimus dolores? Ratione, omnis
                        maiores! Facere eaque vero qui. Ipsam laboriosam,
                        molestiae aliquid, obcaecati tenetur odit delectus ducimus
                        exercitationem aspernatur architecto cupiditate corrupti
                        ratione optio voluptatem et.
                      </p>
                    </div>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Support;
