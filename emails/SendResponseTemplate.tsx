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

const SendResponseTemplate = (firstName: string) => {
    return (
        <Html>
            <Head />
            <Body style={main}>
                <Preview className=' text-xl capitalize'>{`Subject - Thanks for reaching out to Cromax Photography!`}</Preview>
                <Container style={container}>
                    <Section style={{ paddingBottom: '20px' }}>
                        <Row>
                            <Text style={review}>Hello {firstName} We’ve received your message and we’ll get back to you as soon as we can. Thanks for reaching out to Cromax Photography! If you’re just testing — it worked! 🎉Best regards, The Cromax Team</Text>
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

export default SendResponseTemplate;

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
