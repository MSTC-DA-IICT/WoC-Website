import React from 'react'; 
import Timeline from '@material-ui/lab/Timeline'; 
import TimelineItem from '@material-ui/lab/TimelineItem'; 
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'; 
import TimelineConnector from '@material-ui/lab/TimelineConnector'; 
import TimelineContent from '@material-ui/lab/TimelineContent'; 
import TimelineDot from '@material-ui/lab/TimelineDot'; 
import Typography from '@material-ui/core/Typography'; 
import { Paper } from '@material-ui/core'; 

const paperstyle = {
padding: '16px 1px',
textAlign: 'center',
backgroundColor: 'black', // Set background color to black
color: 'white', // Set font color to white
};

const timelineStyle = {
marginTop: '100px',
// color: 'white', // Set font color to white
};

export default function Stages() { 
	return ( 
        <Typography component="h7" 
                                variant="h7" align="center" 
                    gutterBottom> 
                        |

		<Timeline align="alternate" style={timelineStyle}> 
			<TimelineItem> 
				<TimelineSeparator> 
					<TimelineDot color="secondary" /> 
					<TimelineConnector /> 
				</TimelineSeparator> 
				<TimelineContent> 
				<Paper elevation={3} style={paperstyle}>Registration: 28th December, 2023 - 2nd January, 2024
				</Paper> 
				</TimelineContent> 
			</TimelineItem> 
			<TimelineItem> 
				<TimelineSeparator> 
					<TimelineDot color="secondary" /> 
					<TimelineConnector /> 
				</TimelineSeparator> 
				<TimelineContent> 
				<Paper elevation={3} style={paperstyle}>Project Allocation: 3rd January, 2024  
				</Paper> 
				</TimelineContent> 
			</TimelineItem> 
			<TimelineItem> 
				<TimelineSeparator> 
					<TimelineDot color="secondary" /> 
					<TimelineConnector /> 
				</TimelineSeparator> 
				<TimelineContent> 
				<Paper elevation={3} 
					style={paperstyle}>Development Period Starts: 4th January, 2024 
				</Paper> 
				</TimelineContent> 
			</TimelineItem> 
            <TimelineItem> 
				<TimelineSeparator> 
					<TimelineDot color="secondary" /> 
					<TimelineConnector /> 
				</TimelineSeparator> 
				<TimelineContent> 
				<Paper elevation={3} style={paperstyle}>Mid Evaluation: 19th January, 2024
				</Paper> 
				</TimelineContent> 
			</TimelineItem>
            <TimelineItem> 
				<TimelineSeparator> 
					<TimelineDot color="secondary" /> 
					<TimelineConnector /> 
				</TimelineSeparator> 
				<TimelineContent> 
				<Paper elevation={3} style={paperstyle}>Development Period Ends: 1st February, 2024
				</Paper> 
				</TimelineContent> 
			</TimelineItem> 
			<TimelineItem> 
				<TimelineSeparator> 
					<TimelineDot /> 
				</TimelineSeparator> 
				<TimelineContent> 
				<Paper elevation={3} 
					style={paperstyle}>Final Evaluation: 11th February, 2024 
				</Paper> 
				</TimelineContent> 
			</TimelineItem> 
		</Timeline> 
        </Typography>
	); 
} 
