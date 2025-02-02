import React from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';

interface ApiResponse {
  name: string;
  birth_year: string;
}

interface AppState {
  results: { name: string; description: string }[];
  error: string | null;
  loading: boolean;
}

class App extends React.Component<unknown, AppState> {
  state: AppState = {
    results: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm') || '';
    if (searchTerm) {
      this.fetchResults(searchTerm);
    }
  }

  fetchResults = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      this.setState({ results: [], error: 'Please enter a search term.' });
      return;
    }

    this.setState({ loading: true, error: null });

    const apiURL = `https://swapi.dev/api/people/?search=${searchTerm}`;

    try {
      const response = await axios.get<{ results: ApiResponse[] }>(apiURL);
      const results = response.data.results.map((item) => ({
        name: item.name,
        description: `Born in ${item.birth_year}`,
      }));
      this.setState({ results, error: null });
    } catch (error) {
      this.setState({
        error:
          error instanceof Error ? error.message : 'Failed to fetch results.',
        results: [],
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = (searchTerm: string) => {
    this.fetchResults(searchTerm);
  };

  renderErrorButton = () => {
    const throwError = () => {
      throw new Error('Test Error');
    };

    return (
      <button
        onClick={throwError}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#ff6b6b',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Throw Error
      </button>
    );
  };

  render() {
    const { loading, results, error } = this.state;

    const appStyle = {
      backgroundColor: 'rgba(18, 18, 18, 0.9)',
      minHeight: '100vh',
      padding: '20px',
      color: '#fff',
    };

    const headerStyle = {
      fontSize: '2rem',
      marginBottom: '20px',
      textAlign: 'center' as const,
    };

    const loadingStyle = {
      color: '#007bff',
      textAlign: 'center' as const,
      margin: '20px 0',
    };

    return (
      <div style={appStyle}>
        <h1 style={headerStyle}>rs-react-components-app</h1>
        <Search
          onSearch={this.handleSearch}
          defaultSearchTerm={localStorage.getItem('searchTerm') || ''}
        />
        {loading && <div style={loadingStyle}>Loading...</div>}
        <Results results={results} error={error} />
        {this.renderErrorButton()}
      </div>
    );
  }
}

export default App;
