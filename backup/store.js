import Vuex from 'vuex'
import subject from './subject'
import axios from 'axios'

export default new Vuex.Store({
    state: {
        subjects: [],
    },
    mutations: {
        setSubjects(state, data) {
            state.subjects = data;
        },
        addSubject(state, subject) {
            state.subjects.push(subject);
        },
        removeSubject(state, subjectId) {
            state.subjects = state.subjects.filter(subject => subject.id !== subjectId);
        },
    },
    actions: {
        fetchAllSubjects(context) {
            axios.get("api/subject")
                .then((response) => {
                    context.commit("setSubjects", response.data.data);
                }).catch((error) => {
                    console.error("Error fetching subjects:", error);
                });
        },
        addSubjectToDatabase(context, newSubject) {
            axios.post("api/subject", newSubject)
                .then((response) => {
                    context.commit("addSubject", response.data.data);
                }).catch((error) => {
                    console.error("Error adding subject:", error);
                });
        },
        deleteSubjectFromDatabase(context, subjectId) {
            axios.delete(`api/subject/${subjectId}`)
                .then(() => {
                    context.commit("removeSubject", subjectId);
                }).catch((error) => {
                    console.error("Error deleting subject:", error);
                });
        },
    },
    getters: {
        getSubjects(state) {
            return state.subjects;
        },
    },
    modules: {
        subject,
    },
});