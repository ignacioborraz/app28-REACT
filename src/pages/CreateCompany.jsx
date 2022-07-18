import {useState,useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {Grid} from '@mui/material'

import Container from '../components/Container'
import StyledGrid from '../components/StyledGrid'
import StyledGridImg from '../components/StyledGridImg'
import Text from '../components/Text'

import companyActions from '../redux/actions/companyActions'

export default function CreateCompany({options}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [files,setFiles] = useState([])
    
    async function handleCreation(event) {
        event.preventDefault()
        const file = await files[0]
        console.log(files)
        console.log(file)
        const nameCompany = await event.target[0].value
        const detailCompany = await event.target[2].value
        console.log(nameCompany)
        console.log(detailCompany)
        const formData = new FormData()
            formData.append('nameCompany', nameCompany)
            formData.append('detailCompany', detailCompany)
            formData.append('file', file)
        console.log(formData)
        await dispatch(companyActions.createCompany(formData))
            .then(navigate("/createdCompany",{replace:true}))
    }

    let classN = 'backGroundStyle '+options.bgImage

    return (
        <Grid container sx={{flexGrow: '1', backgroundColor: 'rgb(2,0,3)'}}>
            <StyledGridImg bgColor='rgb(224,224,224)' className={classN} />
            <StyledGrid bgColor='rgb(224,224,224)' direction='column'>
                <Text variant='h3' width='75%' font='Paytone One' color='rgb(224,224,224)' bgColor='rgb(105,24,152)' padding='15px' margin='0 0 15px 0'>
                    {options.title}
                </Text>
                <form onSubmit={handleCreation} className='newForm'>
                    <Container width='100%' color='rgb(224,224,224)' bgColor='rgb(2,0,3)' paddding='2px' margin='2px'>
                        <input name='nameCompany' id='nameCompany' placeholder='Name' type="text" className='inputForm' required/>
                    </Container>
                    <Container width='100%' color='rgb(224,224,224)' bgColor='rgb(2,0,3)' paddding='2px' margin='2px'>
                        <input name='logoCompany' id='logoCompany' placeholder='Logo' type="file" className='inputForm' onChange={(event)=>setFiles(event.target.files)} required/>
                    </Container>
                    <Container width='100%' color='rgb(224,224,224)' bgColor='rgb(2,0,3)' paddding='2px' margin='2px'>
                        <input name='detailCompany' id='detailCompany' placeholder='Detail' type="text" className='inputForm' required/>
                    </Container>                 
                    <input type="submit" className='buttonForm' required value='create!' />
                </form>
            </StyledGrid>
        </Grid>
    )
    
}