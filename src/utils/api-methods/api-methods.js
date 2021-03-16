import service from '../interceptor/interceptor';

const fetchData = async (url) => {
    const response = await service.get(url);
    return response;
}

export {
    fetchData
}