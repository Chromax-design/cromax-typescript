import React from 'react'

const TitleComponent = ({ title }: { title: string }) => {
    return (
        <div>
            <h1 className=' text-white text-center text-4xl md:text-5xl lg:text-7xl capitalize py-4'>
                {title}
            </h1>
        </div>
    )
}

export default TitleComponent

// import {
//   Body,
//   Container,
//   Head,
//   Hr,
//   Html,
//   Preview,
//   Row,
//   Section,
//   Text,
// } from '@react-email/components';

// interface ContactFormTemplateProps {
//   subjectText?: string;
//   message?: string;
// }

// export const ContactFormTemplate = ({
//   subjectText,
//   message,
// }: ContactFormTemplateProps) => {
//   return (
//     <Html>
//       <Head />
//       <Body style={main}>
//         <Preview className=' text-xl capitalize'>{`Subject - ${subjectText}`}</Preview>
//         <Container style={container}>
//           <Section style={{ paddingBottom: '20px' }}>
//             <Row>
//               <Text style={review}>{message}</Text>
//             </Row>
//           </Section>

//           <Hr style={hr} />

//           <Section>
//             <Row>
//               <Text style={footer}>
//                 Cromax Photography &copy; {new Date().getFullYear()}
//               </Text>
//             </Row>
//           </Section>
//         </Container>
//       </Body>
//     </Html>
//   );
// };

// export default ContactFormTemplate;

// const main = {
//   backgroundColor: '#ffffff',
//   fontFamily:
//     '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
// };

// const container = {
//   margin: '0 auto',
//   padding: '20px 0 48px',
//   width: '580px',
//   maxWidth: '100%',
// };

// const paragraph = {
//   fontSize: '18px',
//   lineHeight: '1.4',
//   color: '#484848',
// };

// const review = {
//   ...paragraph,
//   padding: '24px',
//   backgroundColor: '#f2f3f3',
//   borderRadius: '4px',
// };

// const hr = {
//   borderColor: '#cccccc',
//   margin: '20px 0',
// };

// const footer = {
//   color: '#9ca299',
//   fontSize: '14px',
//   marginBottom: '10px',
// };
