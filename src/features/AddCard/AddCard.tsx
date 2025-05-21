import { ErrorMessage, Form, Formik } from "formik";

import Modal from "react-responsive-modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import * as Yup from 'yup';
import AddNew from "../../assets/box.svg";
import styles from "./AddCard.module.scss";
import 'react-responsive-modal/styles.css';
import { TypeAddModal } from "../../types/TypeAddModal";
import useActiveCard, { TypeStateCard } from "../../store/useActiveCard";
import { generate16DigitCardNumber, generateMonthNumber, generateNumberBetween26And30, generateRandomName, generateThreeDigitNumber } from "../../utils/ramdom";
const AddCard = ({ openModal, setOpenModal }: TypeAddModal) => {

  const onCloseModal = () => setOpenModal(false);

  const { addCard }: TypeStateCard = useActiveCard();

  const cardSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, 'Card number must be 16 digits')
      .required('Card Number is a required field.'),
    cvv: Yup.string()
      .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits')
      .required('CVV is a required field.'),
    expiry: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry must be in MM/YY format')
      .required('Expiry is a required field.'),
    name: Yup.string().required('Name is a required field.'),
  });

  return (
    <div>
      <Modal open={openModal} onClose={onCloseModal} center classNames={{ closeButton: styles.Modal__close, modal: styles.Modal }}>
        <Formik
          initialValues={{
            cardNumber: generate16DigitCardNumber().toString(),
            cvv: generateThreeDigitNumber().toString(),
            expiry: `${generateMonthNumber().toString()}/${generateNumberBetween26And30().toString()}`,
            name: generateRandomName(),
          }}
          validationSchema={cardSchema}
          onSubmit={(values) => {
            addCard(values);
            setOpenModal(false);
          }}
        >
          {({ handleChange, handleBlur, values, handleSubmit }) => (
            <Form className={styles.Forms} onSubmit={handleSubmit}>
              <div className={styles.Forms__input}>
                <Input handleBlur={handleBlur} name="cardNumber" label="Card number" onChange={handleChange} placeholder="Enter Card number" type="text" value={values.cardNumber} />
                <ErrorMessage name="cardNumber" className={styles.Forms__error} component="div" />
              </div>
              <div className={styles.Forms__input}>
                <Input handleBlur={handleBlur} name="cvv" label="CVV" onChange={handleChange} placeholder="Enter CVV" type="text" value={values.cvv} />
                <ErrorMessage name="cvv" className={styles.Forms__error} component="div" />
              </div>
              <div className={styles.Forms__input}>
                <Input handleBlur={handleBlur} name="expiry" label="Expiry" onChange={handleChange} placeholder="Enter Expiry" type="text" value={values.expiry} />
                <ErrorMessage name="expiry" className={styles.Forms__error} component="div" />
              </div>
              <div className={styles.Forms__input}>
                <Input handleBlur={handleBlur} name="name" label="Name" onChange={handleChange} placeholder="Enter Name" type="text" value={values.name} />
                <ErrorMessage name="name" className={styles.Forms__error} component="div" />
              </div>
              <Button className={styles.Forms__btn} title="Submit" onClick={handleSubmit} icon={AddNew} />
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}

export default AddCard
