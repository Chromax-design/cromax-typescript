import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface SendMailTemplateProps {
  fullName?: string;
  senderEmail?: string;
  subjectText?: string;
  message?: string;
}

export const SendMailTemplate = ({
  fullName,
  senderEmail,
  subjectText,
  message,
}: SendMailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview className=' text-xl capitalize'>{`Subject - ${subjectText}`}</Preview>
        <Container style={container}>
          <Section style={{ paddingBottom: '20px' }}>
            <Row>
              <Text style={paragraph}>
                <b>Name:</b> {fullName}<br />
                <b>Email:</b> {senderEmail}
              </Text>
            </Row>
          </Section>
          <Section style={{ paddingBottom: '20px' }}>
            <Row>
              <Text style={review}>{message}</Text>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Text style={footer}>
                Cromax Photography &copy; {new Date().getFullYear()}
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SendMailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginBottom: '10px',
};
