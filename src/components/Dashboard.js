import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Box, Button} from "@chakra-ui/core"
import NotesContainer from '../containers/NotesContainer'
// import NewNoteForm from './notes/NewNoteForm'

class Dashboard extends React.Component {

    componentDidMount = () =>{
     
    }

    render(){
        if(!this.props.user) {
            this.props.history.push('/login')
            return null
          } 

        const h2styles = {
			color: "black",
			fontSize: "60px"
        }
        
        return (
            <Box 
                ml="3"
            >
                <Box >
                   
                </Box>
                <Box>
                    <Link to="/notes/new">
                        <Button  
                            variant="solid" 
                            backgroundColor="messenger.600" 
                            color="#ffffff"
                            type="submit" 
                            value="New Note"
                            m={2}
                        >
                            New Note
                        </Button>
                    </Link>
                    <NotesContainer />
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(withRouter(Dashboard))