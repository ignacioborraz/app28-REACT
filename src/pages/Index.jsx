import {Grid} from '@mui/material'
import StyledGrid from '../components/StyledGrid'
import StyledGridImg from '../components/StyledGridImg'
import Text from '../components/Text'

export default function Index() {
    return (
        <Grid container sx={{flexGrow: '1', backgroundColor: 'rgb(2,0,3)'}}>
            <StyledGridImg bgColor='rgb(224,224,224)' className='backGroundStyle bgIndex' />
            <StyledGrid bgColor='rgb(224,224,224)' direction='column'>
                <Text variant='h3' width='75%' font='Paytone One' color='rgb(224,224,224)' bgColor='rgb(105,24,152)' padding='15px' margin='0 0 10px 0'>
                    rosarioJobs
                </Text>
                <Text variant='h5' width='75%' font='Paytone One' color='rgb(224,224,224)' bgColor='rgb(2,0,3)' padding='5px' margin='0 0 10px 0'>
                    jobs all over the world!
                </Text>
            </StyledGrid>
        </Grid>
    )
    
}